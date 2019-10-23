import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TabBar.less';

function TabBar({ onChange, nav }) {
    const [data, setData] = useState(nav[0]);

    function selectItem(item) {
        setData(item);
        onChange(item);
    }
    return (
        <div className="org-tab-container">
            {
                nav.map((item, key) => (
                    <div onClick={selectItem.bind(this, item)} key={key} className={`org-tab-item ${data.title === item.title ? 'org-tab-actived' : ''}`}>
                        {item.title}
                    </div>
                ))
            }
        </div>
    );
}
TabBar.propTypes = {
    nav: PropTypes.array.isRequired,
    onChange: PropTypes.func,
};
TabBar.defaultProps = {
    onChange: () => { },
};

export default TabBar;
