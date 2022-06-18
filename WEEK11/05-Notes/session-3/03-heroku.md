# Heroku

## Demo

- Ensure `heroku --version`
  - Can install from [here](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)
- Copy [25-Ins_Heroku](../../01-Activities/25-Ins_Heroku) into a fresh GH repo
  - Demonstrate the application locally
  - `heroku auth:login`
  - Notice that the application uses the `PORT` environment variable for the port that it listens to
  - `heroku create` at the root of the repository
  - Show the `heroku` remote in the repository
  - `git push heroku main`
  - `heroku open`
  - `heroku logs --tail`
  - Also show the new website from the heroku webpage

## Try

- Try [26-Stu_Heroku/README.md](../activities/26-Stu_Heroku/README.md)
