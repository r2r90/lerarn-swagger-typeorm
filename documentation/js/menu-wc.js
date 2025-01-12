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
                                            'data-bs-target="#controllers-links-module-AppModule-05de20cf04e038d8ca3488163c782c3a4e6da864b350dc8df1a9720d9baf4553d24584fe8f043c1707382061b2869ebd9d5088969b14694ef42d7d8bd2ec7c27"' : 'data-bs-target="#xs-controllers-links-module-AppModule-05de20cf04e038d8ca3488163c782c3a4e6da864b350dc8df1a9720d9baf4553d24584fe8f043c1707382061b2869ebd9d5088969b14694ef42d7d8bd2ec7c27"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-05de20cf04e038d8ca3488163c782c3a4e6da864b350dc8df1a9720d9baf4553d24584fe8f043c1707382061b2869ebd9d5088969b14694ef42d7d8bd2ec7c27"' :
                                            'id="xs-controllers-links-module-AppModule-05de20cf04e038d8ca3488163c782c3a4e6da864b350dc8df1a9720d9baf4553d24584fe8f043c1707382061b2869ebd9d5088969b14694ef42d7d8bd2ec7c27"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-05de20cf04e038d8ca3488163c782c3a4e6da864b350dc8df1a9720d9baf4553d24584fe8f043c1707382061b2869ebd9d5088969b14694ef42d7d8bd2ec7c27"' : 'data-bs-target="#xs-injectables-links-module-AppModule-05de20cf04e038d8ca3488163c782c3a4e6da864b350dc8df1a9720d9baf4553d24584fe8f043c1707382061b2869ebd9d5088969b14694ef42d7d8bd2ec7c27"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-05de20cf04e038d8ca3488163c782c3a4e6da864b350dc8df1a9720d9baf4553d24584fe8f043c1707382061b2869ebd9d5088969b14694ef42d7d8bd2ec7c27"' :
                                        'id="xs-injectables-links-module-AppModule-05de20cf04e038d8ca3488163c782c3a4e6da864b350dc8df1a9720d9baf4553d24584fe8f043c1707382061b2869ebd9d5088969b14694ef42d7d8bd2ec7c27"' }>
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
                                            'data-bs-target="#controllers-links-module-PostsModule-a9761cc1165de3d3896354ffd7e403b9023976ff9afe06b09d1f685bff8680e57113e664a64b45b91008aef502a72830890ef18d7016789ee97bf2b58c1775f1"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-a9761cc1165de3d3896354ffd7e403b9023976ff9afe06b09d1f685bff8680e57113e664a64b45b91008aef502a72830890ef18d7016789ee97bf2b58c1775f1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-a9761cc1165de3d3896354ffd7e403b9023976ff9afe06b09d1f685bff8680e57113e664a64b45b91008aef502a72830890ef18d7016789ee97bf2b58c1775f1"' :
                                            'id="xs-controllers-links-module-PostsModule-a9761cc1165de3d3896354ffd7e403b9023976ff9afe06b09d1f685bff8680e57113e664a64b45b91008aef502a72830890ef18d7016789ee97bf2b58c1775f1"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-a9761cc1165de3d3896354ffd7e403b9023976ff9afe06b09d1f685bff8680e57113e664a64b45b91008aef502a72830890ef18d7016789ee97bf2b58c1775f1"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-a9761cc1165de3d3896354ffd7e403b9023976ff9afe06b09d1f685bff8680e57113e664a64b45b91008aef502a72830890ef18d7016789ee97bf2b58c1775f1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-a9761cc1165de3d3896354ffd7e403b9023976ff9afe06b09d1f685bff8680e57113e664a64b45b91008aef502a72830890ef18d7016789ee97bf2b58c1775f1"' :
                                        'id="xs-injectables-links-module-PostsModule-a9761cc1165de3d3896354ffd7e403b9023976ff9afe06b09d1f685bff8680e57113e664a64b45b91008aef502a72830890ef18d7016789ee97bf2b58c1775f1"' }>
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
                                            'data-bs-target="#controllers-links-module-UsersModule-0a33361a1e25d1f3db5a75c08a688d43dfea734ce8682edc32039ce27a038b99eacc1a6bab4b5cef1dc45a512e11786fae626bfa2bb8997030d9ad9388ad2cef"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-0a33361a1e25d1f3db5a75c08a688d43dfea734ce8682edc32039ce27a038b99eacc1a6bab4b5cef1dc45a512e11786fae626bfa2bb8997030d9ad9388ad2cef"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-0a33361a1e25d1f3db5a75c08a688d43dfea734ce8682edc32039ce27a038b99eacc1a6bab4b5cef1dc45a512e11786fae626bfa2bb8997030d9ad9388ad2cef"' :
                                            'id="xs-controllers-links-module-UsersModule-0a33361a1e25d1f3db5a75c08a688d43dfea734ce8682edc32039ce27a038b99eacc1a6bab4b5cef1dc45a512e11786fae626bfa2bb8997030d9ad9388ad2cef"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-0a33361a1e25d1f3db5a75c08a688d43dfea734ce8682edc32039ce27a038b99eacc1a6bab4b5cef1dc45a512e11786fae626bfa2bb8997030d9ad9388ad2cef"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-0a33361a1e25d1f3db5a75c08a688d43dfea734ce8682edc32039ce27a038b99eacc1a6bab4b5cef1dc45a512e11786fae626bfa2bb8997030d9ad9388ad2cef"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-0a33361a1e25d1f3db5a75c08a688d43dfea734ce8682edc32039ce27a038b99eacc1a6bab4b5cef1dc45a512e11786fae626bfa2bb8997030d9ad9388ad2cef"' :
                                        'id="xs-injectables-links-module-UsersModule-0a33361a1e25d1f3db5a75c08a688d43dfea734ce8682edc32039ce27a038b99eacc1a6bab4b5cef1dc45a512e11786fae626bfa2bb8997030d9ad9388ad2cef"' }>
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
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
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