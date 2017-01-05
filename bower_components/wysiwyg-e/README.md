# wysiwyg-e [![Build Status](https://travis-ci.org/miztroh/wysiwyg-e.svg?branch=master)](https://travis-ci.org/miztroh/wysiwyg-e)

> /wɪziwɪɡi/

> A what-you-see-is-what-you-get editor created with Polymer.	Under the hood, it provides undo / redo history management, selection management, and a toolbar that accepts child elements to provide editing capabilities.	All the included tools (see below for list) are accessible via both the toolbar buttons and keyboard shortcuts.

## Included Tools (opt-in)

* Bold
* Italic
* Underline
* Strikethrough
* Clear Formatting
* Code
* Link
* Image
* Audio
* Video
* Ordered List
* Unordered List
* Indent / Outdent
* Heading (H1 - H6)
* Blockquote
* Undo / Redo

## Usage

```
<wysiwyg-e>
	<wysiwyg-tool-bold></wysiwyg-tool-bold>
	<wysiwyg-tool-italic></wysiwyg-tool-italic>
	<wysiwyg-tool-underline></wysiwyg-tool-underline>
	<wysiwyg-tool-strike></wysiwyg-tool-strike>
	<wysiwyg-tool-clear></wysiwyg-tool-clear>
	<wysiwyg-tool-code></wysiwyg-tool-code>
	<wysiwyg-tool-link></wysiwyg-tool-link>
	<wysiwyg-tool-image></wysiwyg-tool-image>
	<wysiwyg-tool-audio></wysiwyg-tool-audio>
	<wysiwyg-tool-video></wysiwyg-tool-video>
	<wysiwyg-tool-ordered></wysiwyg-tool-ordered>
	<wysiwyg-tool-unordered></wysiwyg-tool-unordered>
	<wysiwyg-tool-indent></wysiwyg-tool-indent>
	<wysiwyg-tool-outdent></wysiwyg-tool-outdent>
	<wysiwyg-tool-justify right center full></wysiwyg-tool-justify>
	<wysiwyg-tool-heading h1 h2 h3 h4 h5 h6></wysiwyg-tool-heading>
	<wysiwyg-tool-blockquote></wysiwyg-tool-blockquote>
	<wysiwyg-tool-undo></wysiwyg-tool-undo>
	<wysiwyg-tool-redo></wysiwyg-tool-redo>
</wysiwyg-e>
```

## Demo and API docs

[Demo and API docs](https://miztroh.github.io/bower_components/wysiwyg-e/)

## Installation

``bower install wysiwyg-e``

## License

### The MIT License (MIT)
Copyright (c) 2016 Jonathan Cox

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

![open source initiative](https://miztroh.github.io/bower_components/wysiwyg-e/images/open-source-initiative.png)
