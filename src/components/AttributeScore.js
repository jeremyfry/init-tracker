import React from 'react';
export const AttributeScore = (props) => {
    const { attribute, score } = props;
    const modifer = (value) => {
        return Math.floor((value-10) / 2);
    };
    const labels = {
        str: 'Str',
        int: 'Int',
        dex: 'Dex',
        con: 'Con',
        wis: 'Wis',
        cha: 'Cha',
        ssdc: 'Spell Save DC',
        ac: 'Armor Class',
        pp: 'Passive Perception',
        init: 'Iniative',
        spd: 'Speed'
    }
    const className = `attribute-score ${attribute}`;
    return (<div className={className}>
        <div className="attribute-score__attribute">
            {labels[attribute]}
        </div>
        <div className="attribute-score__score">
            {score}
        </div>
        <div className="attribute-score__modifier">{modifer(score)}</div>
    </div>);
}