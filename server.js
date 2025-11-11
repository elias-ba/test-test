const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`<h1>Hello from Azure App Service 🚀</h1>
            <p>Environment: ${process.env.ENVIRONMENT || 'development'}</p>`);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
