"use client";
import Image from "next/image";
import { Panel } from 'primereact/panel';
import panelDemoModule from './paneldemo.module.css';

export default function Home() {
    return (
        <div className="bg-rose-500">
            asdasd
            <Panel header="Named ClassName" className="mypanel">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Panel>
        </div>
    )
}
