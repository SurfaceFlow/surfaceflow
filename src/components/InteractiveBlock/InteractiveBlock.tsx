import { useState } from 'react'

import { useTranslation } from 'react-i18next'

const InteractiveBlock = (): JSX.Element => {
    const { t } = useTranslation()

    return (
        <div className="p-2 text-center">
            InteractiveBlock
        </div>
    );
}

export default InteractiveBlock