import Link from 'next/link';
import React from 'react'

interface RepoDirs {
    name: string;
}

async function fetchRepoContents(name: string) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const response = await fetch(`https://api.github.com/repos/dtsuper3/${name}/contents`,
        {
            next: {
                revalidate: 60,
            }
        });
    const contents = await response.json();
    return contents;
}
async function RepoDirs({ name }: RepoDirs) {
    const contents = await fetchRepoContents(name);
    const dirs = contents.filter((item: any) => item.type === 'dir');

    return (
        <>
            <h3>Directories</h3>
            <ul>
                {
                    dirs.map((dir: any) => <li key={dir.path}>
                        <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
                    </li>)
                }
            </ul>
        </>
    )
}

export default RepoDirs