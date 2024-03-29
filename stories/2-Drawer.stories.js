import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, object } from "@storybook/addon-knobs";
import { Drawer, DrawerList } from 'components/Drawers'

export default {
    title: 'Drawer',
    component: Drawer,
    decorators: [withKnobs]
};

const CerdasLogo = "https://firebasestorage.googleapis.com/v0/b/cerdasgrp.appspot.com/o/Landing%2FCerdasGroupLogo.webp?alt=media&token=d03f0e73-35ff-4911-8b5e-b6a95443bea6"

const contents = [
    { type: "single", level: 0, title: "Home", linkTo: "/", logo: null },
    {
        type: "multiple", level: 0, title: "Products", logo: null, contents: [
            {
                type: "multiple", level: 1, title: "UX Design", logo: null, contents: [
                    { type: "single", level: 2, title: "You know Ill Go Get", linkTo: "/ux/GoGet", logo: null }
                ]
            },
            {
                type: "multiple", level: 1, title: "Music producers", logo: null, contents: [
                    { type: "single", level: 2, title: "DJ rizki", linkTo: "/music/DJRizki", logo: null }
                ]
            },
        ]
    },
    { type: "divider" }
]

export const Empty = () => {
    return (
        <Drawer
            open
            withHeader
            anchor={text("Anchor", "right")}
            logoURL={CerdasLogo}
            background={text("Background", "#fff")}
            color={text("Color", "#333")}
        />
    );
};

export const Filled = ({ history }) => {
    return (
        <Drawer
            open
            withHeader
            anchor={text("Anchor", "right")}
            logoURL={CerdasLogo}
            background={text("Background", "#fff")}
            color={text("Color", "#333")}
        >
            <DrawerList
                contents={contents}
                history={history}
                font="Lato"
            />
        </Drawer>
    );
};