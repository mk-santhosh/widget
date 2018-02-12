class NBAWidget extends React.Component {

  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  // 'Accept' event handler
  clickHandler() {
    // Perform whatever needs to be done on click of Accept button

    // Invoke the callback javascript function with the agreed parameters
    const pid = this.props.customerId + '-' + this.props.productId;
    this.props.callback({
      data: {
        customerId: this.props.customerId,
        productId: this.props.productId,
        promotionId: pid,
      },
    });
  }

  render() {
    return React.createElement(
      'div',
      null,
      'This widget is served from the web. Best promotion for product id ',
      this.props.productId,
      ' is this stuff obtained from OGW/PEGA with id ',
      React.createElement(
        'i',
        null,
        React.createElement(
          'b',
          null,
          this.props.customerId,
          '-',
          this.props.productId
        )
      ),
      React.createElement('br', null),
      React.createElement('br', null),
      React.createElement(
        'button',
        { onClick: this.clickHandler },
        'Accept'
      )
    );
  }
}
