// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.svg" />
          <title>qrframe - a code based QR code designer</title>
          <meta
            name="description"
            content="Create beautiful QR codes using Javascript code with this customizable QR code generator."
          />
          {assets}
        </head>
        <body class="bg-back-base text-fore-base [--un-default-border-color:fg-subtle]">
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
