export async function isElementFocused(element: WebdriverIO.Element) : Promise<boolean> {
    return await element.getAttribute('focused') === 'true';
}
