import search from "../pages/search";
import { isElementFocused } from "../util/element-state-helper";
import Keys from "../util/keys";
import { keyUntilElementFocused, keyUntilElementNotFocused } from "../util/nav-helper";

describe('test SearchView app', () => {

    beforeEach(async () => {
        // https://github.com/dlenroc/appium-roku-driver/blob/main/src/commands/queryAppState.ts#L12
        expect(await driver.queryAppState('dev')).toBe(4);
    });

    it('should search and verify at least one result', async () => {
        // Keyboards loads and is focused
        await expect(search.keyboard).toBeDisplayed();
        expect(await isElementFocused(await search.keyboard)).toBe(true);

        // Enter search and wait for results
        await driver.keys('hello');
        await expect(search.spinner).toBeDisplayed();
        expect(search.resultRows[1]).toExist();
        (await search.spinner).waitForDisplayed({reverse: true});

        // Navigate to a tile in the results
        await keyUntilElementNotFocused(await search.keyboard, Keys.Down);
        await keyUntilElementFocused(await search.getTileInRow(1, 2), Keys.Right);
    });

    it('should search and verify no results', async () => {
        // Keyboards loads and is focused
        await expect(search.keyboard).toBeDisplayed();
        expect(await isElementFocused(await search.keyboard)).toBe(true);

        // Enter search and wait for no results message
        await driver.keys('hellrr');
        await expect(search.spinner).toBeDisplayed();
        await expect(search.noResultsLabel).toBeDisplayed();
    });

    afterEach(async () => {
        driver.reset();
    });
});
