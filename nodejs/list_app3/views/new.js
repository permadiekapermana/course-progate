<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>LIST</title>
    <link rel="stylesheet" href="/css/style.css">
    <script src="/send_url.js"></script>
  </head>
  <body>
    <header>
      <a href="/" class="header-logo">LIST</a>
    </header>
    <div class="container">
      <div class="container-header">
        <h1>Penambahan Item</h1>
      </div>
      <div class="item-form-wrapper">
        <p class="form-label">Apa yang ingin Anda beli?</p>
        <form action="/create" method="post">
          <input name="itemName" type="text">
          <input type="submit" value="Tambahkan">
        </form>
      </div>
      <a href="/index" class="cancel-button">Kembali</a>
    </div>
  </body>
</html>