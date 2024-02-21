'use client';
import { useGlobalContext } from '@/context/store';
import { BlockLayout, Gap, NotFoundContact, NotFoundHeader } from '@/ui';
import { Fragment } from 'react';

// export default function NotFound() {
const NotFound = () => {
    const { dictionaries } = useGlobalContext();
    return (
        <Fragment>
            <Gap />
            <BlockLayout>
                <NotFoundHeader textData={dictionaries?.not_found?.headerText} />
                <NotFoundContact textData={dictionaries?.not_found?.contactText} />
            </BlockLayout>
            <Gap />
        </Fragment>
    )
}

export default NotFound;