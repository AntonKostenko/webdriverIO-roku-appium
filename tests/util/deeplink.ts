/**
 * Deeplinks by launching or relaunching the app with the specified parameters.
 * @param mediaType - eg. 'movie', 'series'
 * @param contentId - the content id of a piece of content
 */
export async function deeplinkLaunch(mediaType: string, contentId: string): Promise<void> {
    await driver.url(`roku://launch/dev?mediaType=${mediaType}&contentId=${contentId}`);
}

/**
 * Simulates a voice command. Deeplinks without relaunching the app.
 * The app must be already open.
 * @param mediaType - eg. 'movie', 'series'
 * @param contentId - the content id of a piece of content
 */
export async function deeplinkInput(mediaType: string, contentId: string): Promise<void> {
    await driver.url(`roku://input?mediaType=${mediaType}&contentId=${contentId}`);
}
