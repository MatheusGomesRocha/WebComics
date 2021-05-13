import React, { useState } from 'react';

import AngleDownIcon from '../../assets/svg/angle-down.svg';
import AngleRightIcon from '../../assets/svg/angle-right.svg';
import {
    ComicReadContainer,

    ComicReadPage,
    ComicReadPageValue,

    ComicReadChangePageButton,

    ComicReadChapter,
    ComicReadChapterValue
} from './styles';

export default () => {
    const [page, setPage] = useState(22);

    return(
        <ComicReadContainer>
            <ComicReadPage>
                <ComicReadPageValue>Page {page}</ComicReadPageValue>
                <AngleDownIcon fill="#000" height={22} width={18} />
            </ComicReadPage>

            <ComicReadChangePageButton background={page === 1 && '#cecece'} disabled={page === 1 && true} onPress={() => setPage(page - 1)}>
                <AngleRightIcon fill="#fff" height={22} width={18} />
            </ComicReadChangePageButton>

            <ComicReadChangePageButton style={{right: 0}} onPress={() => setPage(page + 1)}>
                <AngleRightIcon fill="#fff" height={22} width={18} />
            </ComicReadChangePageButton>

            <ComicReadChapter>
                <ComicReadChapterValue>157</ComicReadChapterValue>
                <AngleDownIcon fill="#fff" height={22} width={18} />
            </ComicReadChapter>
        </ComicReadContainer>
    )
}