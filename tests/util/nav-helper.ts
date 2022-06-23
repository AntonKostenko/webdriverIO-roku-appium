import { isElementFocused } from "./element-state-helper";
import Keys from "./keys";

export async function keyUntilElementFocused(element: WebdriverIOAsync.Element, key: Keys,
                                            waitOptions = {timeout: 2000, interval: 500}) : Promise<void> {
    let focused = await isElementFocused(element);
    while (!focused) {
        await driver.keys(key);
        focused = await isElementFocused(element);
    }
}

export async function keyUntilElementNotFocused(element: WebdriverIOAsync.Element, key: Keys,
                                            waitOptions = {timeout: 2000, interval: 500}) : Promise<void> {
    let focused = await isElementFocused(element);
    while (focused) {
        await driver.keys(key);
        focused = await isElementFocused(element);
    }
}
