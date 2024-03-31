<section class="action_block block">
    <div class="cont">
        <div class="data">
            <div class="info">
                <div class="title">Подберем земельный участок <span>вашей мечты</span></div>

                <div class="desc">Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым</div>

                <div class="messengers">
                    <div class="label">Отправим каталог свободных<br> участков с ценами на:</div>

                    <div class="items">
                        <a href="<?php the_field("whatsapp", "option") ?>" target="_blank" rel="noopener nofollow">
                            <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_whatsapp"></use></svg>
                        </a>

                        <a href="<?php the_field("telegram", "option") ?>" target="_blank" rel="noopener nofollow">
                            <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_telegram"></use></svg>
                        </a>
                    </div>
                </div>
            </div>

            <form action="" class="form">
                <div class="line">
                    <div class="field">
                        <input type="text" name="name" value="" class="input required" placeholder="Иванов Иван">
                    </div>
                </div>

                <div class="line">
                    <div class="field">
                        <input type="tel" name="phone" value="" class="input required" placeholder="+7 (999) 999-99-99">
                    </div>
                </div>

                <div class="line agree">
                    <div class="field">
                        <label class="checkbox">
                            <input type="checkbox" name="agree" checked>

                            <div class="check">
                                <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_check"></use></svg>
                            </div>

                            <div>Согласен с обработкой моих персональных данных в соответствии с <a href="<?php the_permalink(3); ?>" target="_blank">политикой конфиденциальности</a></div>
                        </label>
                    </div>
                </div>

                <div class="submit">
                    <button type="submit" class="submit_btn">Оставить заявку</button>
                </div>
            </form>

            <img src="<?php bloginfo('template_url'); ?>/images/tmp/bg_action_block.png" alt="" loading="lazy" class="bg">
            <img src="<?php bloginfo('template_url'); ?>/images/tmp/mob_bg_action_block.png" alt="" loading="lazy" class="mob_bg">
        </div>
    </div>
</section>