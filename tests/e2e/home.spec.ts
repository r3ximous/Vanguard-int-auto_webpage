import { expect, test } from '@playwright/test';

test('home page exposes the critical content and contact paths', async ({ page }) => {
	const consoleErrors: string[] = [];
	page.on('console', (message) => {
		if (message.type() === 'error') consoleErrors.push(message.text());
	});

	const response = await page.goto('/');

	expect(response?.ok()).toBe(true);
	await expect(page).toHaveTitle('Vanguard Auto | UAE Automotive Care');
	await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /Diagnostics, bodywork/);
	await expect(page.getByRole('heading', { level: 1 })).toContainText('Keep the craft.');
	await expect(page.locator('main#main-content')).toBeVisible();
	await expect(page.locator('#services article')).toHaveCount(4);
	await expect(page.locator('#gallery figure')).toHaveCount(3);
	await expect(page.getByRole('link', { name: /Start a WhatsApp chat/ })).toHaveAttribute('href', /^https:\/\/wa\.me\//);
	await expect(page.getByRole('link', { name: /Call \+971 58 522 7149/ })).toHaveAttribute('href', 'tel:+971585227149');

	const structuredData = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() ?? '{}');
	expect(structuredData['@type']).toBe('AutoRepair');
	expect(structuredData.address.addressCountry).toBe('AE');
	expect(consoleErrors).toEqual([]);
});

test('keyboard and mobile fundamentals remain usable', async ({ page }) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto('/');

	await page.keyboard.press('Tab');
	await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();

	const hasHorizontalOverflow = await page.evaluate(
		() => document.documentElement.scrollWidth > document.documentElement.clientWidth,
	);
	expect(hasHorizontalOverflow).toBe(false);
	await expect(page.getByRole('link', { name: /Chat with Vanguard Auto on WhatsApp/ })).toBeVisible();
});
