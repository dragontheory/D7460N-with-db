<h1 align="center"><img src="assets/images/logo.svg" width="50%" /></h1>

```

 ________    ________   __     ______     ______  ___     ___      ___    ___ ___
/\   ___ `\ /\____   \ /  `\  /  ____\  /' ____ `\\   -  /\  \    /\  \  /\  \\  \
\ \  \  /\ `\/___/   //  _  \/\  \___/_/\  \  /\  \\    " .\  \   \ \  \ \ \  \\  \
 \ \  \ \ \  \  /   //  /_\  \_\   ___ `\\  \ \ \  \\  \ .     \   \ \  \ \ \  \\  \
  \ \  \___\  \/   //\______   __  \_/\  \\  \___\  \\  \  " .  \   \ \  \___\  \\  \
   \ \________/\__/ \/_____/\__\/\_______/ \________/ \__\  \ \__\   \ \________/ \__\
    \/_______/\/_/         \/__/\/______/ \/_______/ \/__/   \/__/    \/_______/ \/__/

```
TL;DR(WIP)

* D7460N UI is a minimal professional front-end template for building fast, robust, adaptable, and scalable web applications and or websites.

* Separation of Concerns (data from UI) = JS framework agnostic = no monolithic, "opinionated" (AKA controlled) development decision trees.

* Modern CSS functionality = no preprocessors, less LOE, and at 100 to 1K times faster rendering speed than JS and other language equivalents

* Vanilla and native to the browser = no extra deployment or build steps to get around non-native JS framework browser incompatibility, no version upgrade purgatory, no vendor lock, minimal dependencies, and no NPM/NVM security vulnerabilities.

* No/build/compile/serve process required = faster more productive development

* No training developers on third party software (js frameworks) = time and taxpayer savings

------------------------------------------------

ABOUT (WIP):

By decoupling the back-end delivered data from the client rendered UI, D7460N UI has completed "The last mile" in "Separation of Concerns", thus making D7460N UI data agnostic and free to be leveraged in any standards compliant data centric web application.

D7460N represents a new paradigm in web development for "self-aware" web applications.

Self-aware:
D7460N UI "live detects and reacts" to data changes within itself. Buttons don't open/close things anymore. They simply fetch data.

This new paradigm vastly simplifies and lightens the codebase with an average of 50% or more reduction in interactive and business logic development. For example, CSS live detection of dynamically loaded child selectors removes the need for UI related click events that would otherwise do the same thing. Users don't need to tell a menu via a click. Menus KNOW to open when data is populated within it.

This new paradigm in web application development also helps define developer roles and responsibilities (swim-lanes). Since there is minimal overlap between the data and the client-side rendered HTML and CSS, back and front-end developers can work in tandem or in parallel.

Progressively enhanced:
CSS is 100 to 1K times faster than functional JS equivalents.

That said, D7460N UI is progressively enhanced to support and extend CSS functionality with vanilla JS for browsers that don't yet fully support it. Meaning, when the CSS functionality becomes supported in a browser, the progressive enhancement automatically drops off in favor of the more efficient and faster CSS equivalent.

Passively reactive:
CSS was made to be passively reactive, by nature, "out of the box", by itself. No JS or other programming is necessary to enable passive reactiveness. In fact, JS or other languages that do the same are purely redundant and thus technical debt by definition.

Recently enabled CSS functionality that detects changes in the DOM and or data itself, is not supported in most "ever green" browsers (progressively enhanced by JS) that massively simplifies, streamlines, and accelerates, what would otherwise be many more times the LOE to do the same in JS or other languages.

D7460N UI is an opensource project that is the result of over 10 years of iterative development and community knowledge. It does not impose a specific development philosophy or framework, so you are free to architect the way you want.

The goal of sharing this with the community is not to say this is the only way to build web apps, or that it is even the best way to build web apps. Instead, it is to share what may work well in the hope that it may help drive team decisions around what works well for you and your application.

------------------------------------------------

D7460N UI (WIP):

* Enterprise scalability
* End-user usability
* Developer friendly
* At a third of the time and cost

Architecture

* JAMstack
* Minimal/professional look/feel
* Minimal dependencies
* Minimal markup
* Minimal configuration
* Light/fast/secure
* Pre-made static templates, interactive, and business logic

Tech stack:

* Opensource
* Standard compliant
* Vanilla JS/CSS/HTML

Separation of Interests (data from UI)

* Allows for data to be agnostic
* Allows for swapping out middleware/JS/and or other legacy frameworks
* Allows for independent development for front and back-ends
* Allows for flexibility and innovation
* Defines development teams swim-lanes

Least Power Principal:

* Order of language power. Example, CSS before JS
* Lower cognitive barrier of entry (cheaper jobs)

W3C/WHATWG (living) standards compliant

* Future friendly

508 Compliant

* Accessible
* Keyboard navigable
* Configurable audible system
* Context menu (right click) help system
* Optional/configurable help hints
* Fully documented

Convention driven design, layout, and workflow

* Intuitive "out of the box"
* Optional/configurable tour system teaches users iteratively (as they go)
* Comfort (spacing) level settings
* Meaningful animation settings
* Themes
* Web push alerts

Modern

* Newest coding techniques leverage the latest browser supported HTML, CSS, and JS functionality
* Progressive enhancement

Self-aware

* New development paradigm
* Buttons don't open/close thing anymore. They just fetch data. D7460N UI detects when it has data and reacts to it by opening/closing dialogues
* Auto-pagination
* Auto-validation
* Less interactive and business logic scripting
* Less mark-up

Usability

* Both for end-users and developers
* No time/money wasted on training end-users to learn the software and developers to learn their software (JS frameworks)

------------------------------------------------

Goals

Performance:

Maintainability:

Quality:

Developer experience:

The truth about Web Components

Web Components! How do I build a whole app with them? Don’t I need something like React or Angular to build the app?

Short answer:
No. Web Components are now native to all major web browsers (Not you IE).

Long answer:
(Excerpts taken from: blog.pwabuilder.com/posts/building-pwas-with-web-components!/)
Web Components are a collection of Web APIs that allow you to build components. You can think of this as the same as components you build with something like React or Angular, but there are some key differences with Web Components. They are currently supported in all browsers besides Internet Explorer.

Performance
First, components built with either React or Angular are not native components understood by browsers. Because of this, you need to ship a large runtime (the core of both React and Angular) of some sort that can run these components in the browser. Note that this is a basic explanation of how these frameworks work, there are of course many details in the actual implementations. This runtime cost is a huge part of the loading performance issues that apps built with these frameworks commonly have.

With Web Components based frameworks you avoid this large runtime cost as the browser natively understands Web Components, but without sacrificing developer experience. This enables frameworks to still ship features such as performant async rendering but without the code associated with just running the components.

Maintainability / Stability
Web Components, by their nature of being Web Standards, are inherently going to be more stable than any custom code. For example, the Geolocation API is a web standard and because of this, once it was implemented in a browser it has consistently worked since and we can count on it continuing to work far into the future because of the webs guarantee on not breaking existing websites. There are of course drawbacks with this approach, such as it is taking longer for Web Standards to be implemented compared to the React team implementing a new feature in React. However, this is a tradeoff that we feel is fair in return for a good guarantee on long term stability.

Styling with Web Components
Continuing with our Web Standards first approach, modern CSS now has built in APIs / features in browsers that give us all the features we normally use a CSS pre-processor such as SASS for:

CSS Variables:

CSS now has CSS variables! CSS variables work great with Web Components and work extremely similar to variables in SASS.

Style Encapsulation:
Shadow DOM is part of the Web Components spec and helps fix the classic CSS cascade issue. Shadow DOM enables you to encapsulate your styles “inside” of your component, ensuring that CSS elsewhere in your app does not accidentally override CSS in your component. However, using both CSS Variables and the Shadow Parts API we can enable specific pieces of our components to be style-able from outside of the component. This is helpful when you want a component to have certain styles customizable but still have default styles too.

Custom HTML Elements

* No need for JS library to create custom HTML elements
* Semantic for developers
* Target DOM elements without classes (cleaner/lighter UI)
* Used in conjuction with the Shadow DOM to create web components