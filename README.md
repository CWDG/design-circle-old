# Design Circle
**We are using the [Shared Repository Model][srm]**

[srm]: https://guides.github.com/introduction/flow/index.html


The Design Circle club (referred to as DC from here forward) currently does not have a truly functional site, though there is a little something [here][dcs].

[dcs]: http://design.osu.edu/undergrad/co-curricular/design-circle

## Goals for the site

* Landing page
    * Simple. Gentle gradient
    * Logo in the center, with the title beneath it
    * The three central circles of the DC logo are links to the three remaining pages, and are labeled respectively
* About page
    * Officers section, featuring a tiles of the officer's portraits, where clicking on one shows more information about that person, à la [Thoughtbot's people page][tpp]
    * A brief section for club history
    * "Contact Us"/ sign up for listserv area
* Blog page
    * Posts: Title, title image, and content generated with [Sir Trevor][st]
    * One person per week is allowed to post. The admin will enter the email of the person to be given access for the week, and the link will expire in a week or when they post their article.
    * Appears as tiles for the last 9 (flexible) posts with images as backgrounds, in something similar to the About page's officer tile layout
    * Clicking on a tile expands it to fill the width of the tiles section, and expand vertically as necessary
* Events page
    * Events: Title, title image, and content generated with [Sir Trevor][st]
    * Follows the general "tiles" design scheme
    * Blog posts appear in the calendar, link to blog "show" page
    * If there is an event or blog post, the background for that tile is the "title image"
    * Events expand to fill calendar, in a similar way to how blog posts fill the blog area

[st]: http://madebymany.github.io/sir-trevor-js/
[tpp]: http://thoughtbot.com/people

## Developer Setup

### Prerequisites
* Git
    * Mac: use Homebrew. MacPorts should work too, if you're into that
    * Linux/BSD: use your package manager, it should be pretty up-to-date
    * Otherwise: Visit [the sort-of official website][gs] and download from there
* Node.js
    * Mac/Linux: I use NVM to manage my Node versions. If that sounds good to you, there's an install script [on their Github page][nvm]
    * Otherwise: Visit [Node's website][node] and click the big, green "Install" button

[gs]: http://git-scm.com
[nvm]: https://github.com/creationix/nvm
[node]: http://nodejs.org

### Getting setup

[node]: nodejs.org

1. Clone the project

    ```bash
    git clone git@github.com:CWDG/design-circle
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Install Grunt globally

    ```bash
    npm install -g grunt-cli
    ```

4. Start the server

    ```bash
    grunt serve
    ```

