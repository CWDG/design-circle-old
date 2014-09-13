# Design Circle

The Design Circle club (referred to as DC from here forward) currently does not have a truly functional site, though there is a little something [here][ dcs ].

[dsc]: http://design.osu.edu/undergrad/co-curricular/design-circle

## Goals for the site

* Landing page
    * Simple. Gentle gradient, à la [Heroku][heroku]
    * Club name on the left, and oversized logo adjacent on the right
    * The three central circles of the DC logo are link to the three remaining pages, and are labeled respectively
* About page
    * Officers section, featuring a tiles of the officer's portraits, where clicking on one shows more information about that person, à la [Thoughtbot's people page][tpp]
    * A breif section for club history
    * "Contact Us"/ sign up for listserv area
* Blog page
    * One person per week is allowed to post (delegation needs clarification)
    * Appears as tiles for the last 9 (flexible) posts with images as backgrounds, in something similar to [The Verge's homepage][theverge]
    * Clicking on a tile expands it to fill the width of the tiles section, and expand vertically as necessary
* Events page
    * Follows the general "tiles" design scheme, though appears slightly more akin to a calendar
        * Blog posts appear in the calendar, link to blog page
        * If there is an event or blog post, the background image for that day in the calendar view should be an image from the event/blog element
        * Events expand to fill calendar, in a similar way to how blog posts fill the blog area
* Bridging the Gap?  A major event for DC, may need it's own page. Alternately, the event creation page would have to be *very* powerful.

[heroku]: http://heroku.com
[tpp]: http://thoughtbot.com/people
[theverge]: http://theverge.com

## Developer Setup

### Prerequisites
* Git
    * Mac: use Homebrew. MacPorts should work too, if you're into that
    * Linux/BSD: use your package manager, it should be pretty up-to-date
    * Otherwise: Visit [the sort-of official website][gs] and download from there
* Node.js
    * Mac/Linux: I use NVM to manage my Node versions. If that sounds good to you, there's an install script [on thier Github page][nvm]
    * Otherwise: Visit [Node's website][node] and click the big, green "Install" button

[gs]: http://git-scm.com
[nvm]: https://github.com/creationix/nvm
[node]: http://nodejs.org

### Setup
1. Clone the project
2. Use `npm install` to install dependencies

We are using the [Shared Repository Model][srm]

[srm]: https://guides.github.com/introduction/flow/index.html

