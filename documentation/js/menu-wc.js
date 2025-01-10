'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-ccffc79fba2fecda41e4e2320a647edb52d11d7b10e9ae21db7e994fcb3a2504ca309199b3098176266c505461b5f053016b5f17ce8c53caf1b039bff5c95d15"' : 'data-bs-target="#xs-controllers-links-module-AppModule-ccffc79fba2fecda41e4e2320a647edb52d11d7b10e9ae21db7e994fcb3a2504ca309199b3098176266c505461b5f053016b5f17ce8c53caf1b039bff5c95d15"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ccffc79fba2fecda41e4e2320a647edb52d11d7b10e9ae21db7e994fcb3a2504ca309199b3098176266c505461b5f053016b5f17ce8c53caf1b039bff5c95d15"' :
                                            'id="xs-controllers-links-module-AppModule-ccffc79fba2fecda41e4e2320a647edb52d11d7b10e9ae21db7e994fcb3a2504ca309199b3098176266c505461b5f053016b5f17ce8c53caf1b039bff5c95d15"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-ccffc79fba2fecda41e4e2320a647edb52d11d7b10e9ae21db7e994fcb3a2504ca309199b3098176266c505461b5f053016b5f17ce8c53caf1b039bff5c95d15"' : 'data-bs-target="#xs-injectables-links-module-AppModule-ccffc79fba2fecda41e4e2320a647edb52d11d7b10e9ae21db7e994fcb3a2504ca309199b3098176266c505461b5f053016b5f17ce8c53caf1b039bff5c95d15"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ccffc79fba2fecda41e4e2320a647edb52d11d7b10e9ae21db7e994fcb3a2504ca309199b3098176266c505461b5f053016b5f17ce8c53caf1b039bff5c95d15"' :
                                        'id="xs-injectables-links-module-AppModule-ccffc79fba2fecda41e4e2320a647edb52d11d7b10e9ae21db7e994fcb3a2504ca309199b3098176266c505461b5f053016b5f17ce8c53caf1b039bff5c95d15"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-17c3e0024ef66539fab797f56491505e2e64f7681cdff36b080369d0a2c1af12715082786ae058700be881d58fb36d0cc0ade0fdfb9399d3e2f8beda25c987ec"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-17c3e0024ef66539fab797f56491505e2e64f7681cdff36b080369d0a2c1af12715082786ae058700be881d58fb36d0cc0ade0fdfb9399d3e2f8beda25c987ec"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-17c3e0024ef66539fab797f56491505e2e64f7681cdff36b080369d0a2c1af12715082786ae058700be881d58fb36d0cc0ade0fdfb9399d3e2f8beda25c987ec"' :
                                            'id="xs-controllers-links-module-PostsModule-17c3e0024ef66539fab797f56491505e2e64f7681cdff36b080369d0a2c1af12715082786ae058700be881d58fb36d0cc0ade0fdfb9399d3e2f8beda25c987ec"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-17c3e0024ef66539fab797f56491505e2e64f7681cdff36b080369d0a2c1af12715082786ae058700be881d58fb36d0cc0ade0fdfb9399d3e2f8beda25c987ec"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-17c3e0024ef66539fab797f56491505e2e64f7681cdff36b080369d0a2c1af12715082786ae058700be881d58fb36d0cc0ade0fdfb9399d3e2f8beda25c987ec"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-17c3e0024ef66539fab797f56491505e2e64f7681cdff36b080369d0a2c1af12715082786ae058700be881d58fb36d0cc0ade0fdfb9399d3e2f8beda25c987ec"' :
                                        'id="xs-injectables-links-module-PostsModule-17c3e0024ef66539fab797f56491505e2e64f7681cdff36b080369d0a2c1af12715082786ae058700be881d58fb36d0cc0ade0fdfb9399d3e2f8beda25c987ec"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-72bebfd411493066666565f4bf47d7e3e4f4e2fc7abd26b4b87446f82602a166c422de08240b55a4b336796f6632533cf42fe9415bb9685168a7a42871e10c6c"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-72bebfd411493066666565f4bf47d7e3e4f4e2fc7abd26b4b87446f82602a166c422de08240b55a4b336796f6632533cf42fe9415bb9685168a7a42871e10c6c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-72bebfd411493066666565f4bf47d7e3e4f4e2fc7abd26b4b87446f82602a166c422de08240b55a4b336796f6632533cf42fe9415bb9685168a7a42871e10c6c"' :
                                            'id="xs-controllers-links-module-UsersModule-72bebfd411493066666565f4bf47d7e3e4f4e2fc7abd26b4b87446f82602a166c422de08240b55a4b336796f6632533cf42fe9415bb9685168a7a42871e10c6c"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-72bebfd411493066666565f4bf47d7e3e4f4e2fc7abd26b4b87446f82602a166c422de08240b55a4b336796f6632533cf42fe9415bb9685168a7a42871e10c6c"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-72bebfd411493066666565f4bf47d7e3e4f4e2fc7abd26b4b87446f82602a166c422de08240b55a4b336796f6632533cf42fe9415bb9685168a7a42871e10c6c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-72bebfd411493066666565f4bf47d7e3e4f4e2fc7abd26b4b87446f82602a166c422de08240b55a4b336796f6632533cf42fe9415bb9685168a7a42871e10c6c"' :
                                        'id="xs-injectables-links-module-UsersModule-72bebfd411493066666565f4bf47d7e3e4f4e2fc7abd26b4b87446f82602a166c422de08240b55a4b336796f6632533cf42fe9415bb9685168a7a42871e10c6c"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});