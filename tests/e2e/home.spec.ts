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
	await expect(page.getByRole('link', { name: /Request a vehicle assessment/ })).toHaveAttribute('href', /^https:\/\/wa\.me\//);
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

test('mobile navigation opens and closes cleanly', async ({ page }) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto('/');

	const menu = page.locator('#mobile-navigation');
	const toggle = page.getByRole('button', { name: 'Toggle navigation' });

	await expect(menu).toHaveAttribute('aria-hidden', 'true');
	await toggle.click();
	await expect(toggle).toHaveAttribute('aria-expanded', 'true');
	await expect(menu).toHaveAttribute('aria-hidden', 'false');
	await expect(menu).toHaveClass(/is-open/);
	await expect(menu.getByRole('link', { name: 'Services' })).toBeVisible();

	await menu.getByRole('link', { name: 'Contact' }).click();
	await expect(toggle).toHaveAttribute('aria-expanded', 'false');
	await expect(menu).toHaveAttribute('aria-hidden', 'true');
});

test('navbar remains sticky while the page scrolls', async ({ page }) => {
	await page.goto('/');

	const header = page.locator('[data-site-header]');
	await expect(header).toHaveCSS('position', 'sticky');
	const initialTop = await header.boundingBox();
	await page.mouse.wheel(0, 500);
	await expect.poll(async () => (await header.boundingBox())?.y ?? -1).toBeLessThanOrEqual(initialTop?.y ?? 0 + 4);
});

test('service cards expand to reveal focused guidance', async ({ page }) => {
	await page.goto('/');

	const firstCard = page.locator('#services article').first();
	await expect(firstCard.locator('details')).not.toHaveAttribute('open', '');
	await firstCard.click();
	await expect(firstCard.locator('details')).toHaveAttribute('open', '');
	await expect(firstCard.getByRole('link', { name: /Ask about Diagnostics/ })).toBeVisible();
	await firstCard.locator('summary').click();
	await expect(firstCard.locator('details')).not.toHaveAttribute('open', '');
	await firstCard.locator('summary').click();
	await expect(firstCard.locator('details')).toHaveAttribute('open', '');
	await expect(firstCard.getByRole('link', { name: /Ask about Diagnostics/ })).toBeVisible();
});

