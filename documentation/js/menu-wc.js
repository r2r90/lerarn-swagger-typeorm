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
                                            'data-bs-target="#controllers-links-module-AppModule-0038628d643e0dad088b30af9ade900482e4a0c701c4f287daba796e9a245662d3d252a6dff19fd04ee0bb3e30dcb305cb144818d0d72e2809a73570159200c1"' : 'data-bs-target="#xs-controllers-links-module-AppModule-0038628d643e0dad088b30af9ade900482e4a0c701c4f287daba796e9a245662d3d252a6dff19fd04ee0bb3e30dcb305cb144818d0d72e2809a73570159200c1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-0038628d643e0dad088b30af9ade900482e4a0c701c4f287daba796e9a245662d3d252a6dff19fd04ee0bb3e30dcb305cb144818d0d72e2809a73570159200c1"' :
                                            'id="xs-controllers-links-module-AppModule-0038628d643e0dad088b30af9ade900482e4a0c701c4f287daba796e9a245662d3d252a6dff19fd04ee0bb3e30dcb305cb144818d0d72e2809a73570159200c1"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-0038628d643e0dad088b30af9ade900482e4a0c701c4f287daba796e9a245662d3d252a6dff19fd04ee0bb3e30dcb305cb144818d0d72e2809a73570159200c1"' : 'data-bs-target="#xs-injectables-links-module-AppModule-0038628d643e0dad088b30af9ade900482e4a0c701c4f287daba796e9a245662d3d252a6dff19fd04ee0bb3e30dcb305cb144818d0d72e2809a73570159200c1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0038628d643e0dad088b30af9ade900482e4a0c701c4f287daba796e9a245662d3d252a6dff19fd04ee0bb3e30dcb305cb144818d0d72e2809a73570159200c1"' :
                                        'id="xs-injectables-links-module-AppModule-0038628d643e0dad088b30af9ade900482e4a0c701c4f287daba796e9a245662d3d252a6dff19fd04ee0bb3e30dcb305cb144818d0d72e2809a73570159200c1"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-942818369b039d8b05542cdab50c23b2eb8d50e7ca6ccda047789f86db6f4ba0797596117e97a4fa5af87a7ca0b5caab49e2ed1528ad301192ab3ccac6c6d638"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-942818369b039d8b05542cdab50c23b2eb8d50e7ca6ccda047789f86db6f4ba0797596117e97a4fa5af87a7ca0b5caab49e2ed1528ad301192ab3ccac6c6d638"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-942818369b039d8b05542cdab50c23b2eb8d50e7ca6ccda047789f86db6f4ba0797596117e97a4fa5af87a7ca0b5caab49e2ed1528ad301192ab3ccac6c6d638"' :
                                            'id="xs-controllers-links-module-AuthModule-942818369b039d8b05542cdab50c23b2eb8d50e7ca6ccda047789f86db6f4ba0797596117e97a4fa5af87a7ca0b5caab49e2ed1528ad301192ab3ccac6c6d638"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-942818369b039d8b05542cdab50c23b2eb8d50e7ca6ccda047789f86db6f4ba0797596117e97a4fa5af87a7ca0b5caab49e2ed1528ad301192ab3ccac6c6d638"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-942818369b039d8b05542cdab50c23b2eb8d50e7ca6ccda047789f86db6f4ba0797596117e97a4fa5af87a7ca0b5caab49e2ed1528ad301192ab3ccac6c6d638"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-942818369b039d8b05542cdab50c23b2eb8d50e7ca6ccda047789f86db6f4ba0797596117e97a4fa5af87a7ca0b5caab49e2ed1528ad301192ab3ccac6c6d638"' :
                                        'id="xs-injectables-links-module-AuthModule-942818369b039d8b05542cdab50c23b2eb8d50e7ca6ccda047789f86db6f4ba0797596117e97a4fa5af87a7ca0b5caab49e2ed1528ad301192ab3ccac6c6d638"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-20b327fed6807b68f6e9b06abd0bbcb9243b171ce58e94cdf5683beff906005355c3357a47f0a3659bfaebe9b4f960e0d2552e953806763d9f0765384b92ac0e"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-20b327fed6807b68f6e9b06abd0bbcb9243b171ce58e94cdf5683beff906005355c3357a47f0a3659bfaebe9b4f960e0d2552e953806763d9f0765384b92ac0e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-20b327fed6807b68f6e9b06abd0bbcb9243b171ce58e94cdf5683beff906005355c3357a47f0a3659bfaebe9b4f960e0d2552e953806763d9f0765384b92ac0e"' :
                                            'id="xs-controllers-links-module-PostsModule-20b327fed6807b68f6e9b06abd0bbcb9243b171ce58e94cdf5683beff906005355c3357a47f0a3659bfaebe9b4f960e0d2552e953806763d9f0765384b92ac0e"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-20b327fed6807b68f6e9b06abd0bbcb9243b171ce58e94cdf5683beff906005355c3357a47f0a3659bfaebe9b4f960e0d2552e953806763d9f0765384b92ac0e"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-20b327fed6807b68f6e9b06abd0bbcb9243b171ce58e94cdf5683beff906005355c3357a47f0a3659bfaebe9b4f960e0d2552e953806763d9f0765384b92ac0e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-20b327fed6807b68f6e9b06abd0bbcb9243b171ce58e94cdf5683beff906005355c3357a47f0a3659bfaebe9b4f960e0d2552e953806763d9f0765384b92ac0e"' :
                                        'id="xs-injectables-links-module-PostsModule-20b327fed6807b68f6e9b06abd0bbcb9243b171ce58e94cdf5683beff906005355c3357a47f0a3659bfaebe9b4f960e0d2552e953806763d9f0765384b92ac0e"' }>
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
                                            'data-bs-target="#controllers-links-module-UsersModule-8b925b21ff7dabd789baf9021d5d15e7a173cc44f2a66a62ac4ca31b9efc71553f4d18df9c1ba3626521fd6cbe02cbad65f448749cc4fd99751989440a1c42e5"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-8b925b21ff7dabd789baf9021d5d15e7a173cc44f2a66a62ac4ca31b9efc71553f4d18df9c1ba3626521fd6cbe02cbad65f448749cc4fd99751989440a1c42e5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-8b925b21ff7dabd789baf9021d5d15e7a173cc44f2a66a62ac4ca31b9efc71553f4d18df9c1ba3626521fd6cbe02cbad65f448749cc4fd99751989440a1c42e5"' :
                                            'id="xs-controllers-links-module-UsersModule-8b925b21ff7dabd789baf9021d5d15e7a173cc44f2a66a62ac4ca31b9efc71553f4d18df9c1ba3626521fd6cbe02cbad65f448749cc4fd99751989440a1c42e5"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-8b925b21ff7dabd789baf9021d5d15e7a173cc44f2a66a62ac4ca31b9efc71553f4d18df9c1ba3626521fd6cbe02cbad65f448749cc4fd99751989440a1c42e5"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-8b925b21ff7dabd789baf9021d5d15e7a173cc44f2a66a62ac4ca31b9efc71553f4d18df9c1ba3626521fd6cbe02cbad65f448749cc4fd99751989440a1c42e5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-8b925b21ff7dabd789baf9021d5d15e7a173cc44f2a66a62ac4ca31b9efc71553f4d18df9c1ba3626521fd6cbe02cbad65f448749cc4fd99751989440a1c42e5"' :
                                        'id="xs-injectables-links-module-UsersModule-8b925b21ff7dabd789baf9021d5d15e7a173cc44f2a66a62ac4ca31b9efc71553f4d18df9c1ba3626521fd6cbe02cbad65f448749cc4fd99751989440a1c42e5"' }>
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
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
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