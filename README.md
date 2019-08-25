# Jekyll-Paper

![Jekyll-Paper](./favicon.ico)

Jekyll Paper is a simple Jekyll theme, and it is aim to helping you to create your own blog by the easiest way. Jekyll Paper was designed as a paper book style, giving the reader a sense of what it looked like to read a paper book.

Github Pages version is also available in [Jekyll Paper for Github][jekyll-paper-github].

This is a [demo website](https://www.ghosind.com) for Jekyll Paper.

## Screenshots

![Index](./assets/images/index-screenshot.png)

![Post](./assets/images/post-screenshot.png)

![Category](./assets/images/category-screenshot.png)

![Mobile](./assets/images/mobile-screenshot.png)

## Features

- Responsive
- Paginate
- RSS
- Sitemap
- Custom 404 page
- SASS
- Multiple languages
- Configurable navigation menu
- Categories Index
- SEO optimization
- Mathematics
- Diagrams
- Comments

## Getting Start

Jekyll Paper is easy to create your own blog. You can create your blog by five steps only!

1. `~ $ gem install bundler jekyll`
2. `~ $ git clone git@github.com:ghosind/Jekyll-Paper.git`
3. `~ $ cd Jekyll-Paper`
4. `Jekyll-Paper $ bundle install`
5. `Jekyll-Paper $ bundle exec jekyll serve`

## Add New Posts

You can add new posts at any time after you had your own blog. Create a new post need to add a new file in "_posts" directory, and the file name must follow the convention `YYYY-MM-DD-name-of-post.md`.

## Custom Navigation Menu

You can add or update navigation menu items in `_data/menus.yml` file. In the configuration file, you need set title and URL for every navigation menu item.

### Example

```yml
- title: "Index"
  url:   ""

- title: "Github"
  absoluteUrl: true
  url: "https://github.com/john_doe"

- title: "About"
  url:   "about"
```

## Supported Languages

This list order by language codes alphabets.

- English
- Deutsche (German)
- Español (Spanish)
- Français (French)
- 日本語 (Japanese)
- Português (Portuguese)
- 简体中文 (Simplified Chinese)
- 繁體中文 (Traditional Chinese)

## License

Jekyll Paper was released under MIT license.

## Contributing

If you would like to make Jekyll Paper better, you can create a new pull request in [Jekyll Paper Github Page][jekyll-paper].

If you have any questions or suggestions, you can create an issue on [Jekyll Paper Issues][jekyll-paper-issues] or send email to [me](mailto:i@ghosind.com).

## Chinese Version

Jekyll Paper项目提供了中文版的[使用介绍](https://github.com/ghosind/Jekyll-Paper/wiki/%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8Jekyll-Paper)及[文档](https://github.com/ghosind/Jekyll-Paper/wiki#%E4%B8%AD%E6%96%87%E7%89%88%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8Cchinese-version)。

[jekyll-paper]: https://github.com/ghosind/Jekyll-Paper
[jekyll-paper-github]: https://github.com/ghosind/Jekyll-Paper-Github
[jekyll-paper-issues]: https://github.com/ghosind/Jekyll-Paper/issues
