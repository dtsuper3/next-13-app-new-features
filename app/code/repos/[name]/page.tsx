import React from 'react'
import { PageProps } from '@/.next/types/app/layout'
import Repo from '@/app/components/Repo'
import Link from 'next/link'
import RepoDirs from '@/app/components/RepoDirs'
import { Suspense } from 'react';

function RepoPage({ params: { name } }: PageProps) {
    return (
        <div className="card">
            <Link href="/code/repos" className='btn btn-back'>
                Back to Repositories
            </Link>
            <Suspense fallback={<div>Loading repo...</div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<div>Loading directories...</div>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    )
}

export default RepoPage