import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderTitleLabel: ElementFinder;

  constructor() {
    this.orderTitleLabel = $('#center_column .dark');
  }

  public async getOrderTitle(): Promise<string> {
    const titleLabel = await this.orderTitleLabel.getText();

    return titleLabel;
  }
}
