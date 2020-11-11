import React from "react";

import style from './Footer.module.scss';
import dayjs from "dayjs";

export const Footer: React.FunctionComponent = () => (
    <div
        className={style.footer}
    >
        <label>voidpixel <i className="far fa-copyright"/> {dayjs(Date.now()).format('YYYY')}</label>
        <a
            href='https://twitch.tv/voidpixelDev'
            target='_blank'
            rel="noopener noreferrer"
            title='twitch.tv/voidpixelDev'
        ><i className="fab fa-twitch"/></a>
        <a
            href='https://twitter.com/voidpixel'
            target='_blank'
            rel="noopener noreferrer"
            title='@voidpixel'
        ><i className="fab fa-twitter"/></a>
        <a
            href='https://discord.gg/Xt9CCeJ'
            target='_blank'
            rel="noopener noreferrer"
            title='discord/Xt9CCeJ'
        ><i className="fab fa-discord"/></a>
        <a
            href='https://github.com/voidpixel'
            target='_blank'
            rel="noopener noreferrer"
            title='github/voidpixel'
        ><i className="fab fa-github"/></a>
    </div>
)
