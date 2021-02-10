import react from 'react'






<div class="tradingview-widget-container">
  <div id="tradingview_29ac4"></div>
  <div class="tradingview-widget-copyright"><a href="https://in.tradingview.com/symbols/BTCPERP/?exchange=BINANCE" rel="noopener" target="_blank"><span class="blue-text">BTCPERP Chart</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  <script type="text/javascript">
  new TradingView.widget(
  {
  "autosize": true,
  "symbol": "BINANCE:BTCPERP",
  "interval": "D",
  "timezone": "Etc/UTC",
  "theme": "dark",
  "style": "1",
  "locale": "in",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "allow_symbol_change": true,
  "details": true,
  "studies": [
    "IchimokuCloud@tv-basicstudies",
    "MACD@tv-basicstudies",
    "MASimple@tv-basicstudies",
    "MAExp@tv-basicstudies"
  ],
  "show_popup_button": true,
  "popup_width": "1000",
  "popup_height": "650",
  "container_id": "tradingview_29ac4"
}
  );
  </script>
</div>