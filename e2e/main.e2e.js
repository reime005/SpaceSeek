describe('Example (hello)', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  // it('should have launch screen', async () => {
  //   await expect(element(by.id('launch-screen'))).toBeVisible();
  // });

  it('should navigate through screens', async () => {
    await expect(element(by.id('launches-route-btn'))).toBeVisible();

    await element(by.id('launches-route-btn')).tap();

    await expect(element(by.id('launch-screen'))).toBeVisible();

    await element(by.id('settings-route-btn')).tap();

    await expect(element(by.id('settings-screen'))).toBeVisible();
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
