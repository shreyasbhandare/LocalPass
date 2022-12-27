import './VaultGrid.css';
import { useState } from 'react';
import Select from 'react-select';
import { AiFillAppstore } from "react-icons/ai";
import { FaSearchPlus, FaSearchMinus, FaList } from "react-icons/fa";
import { IconContext } from "react-icons";
import ItemCard from './ItemCard';

function VaultGridControls() {
    const n = 20; // static

    const options = [
        { value: 'nameaz', label: 'Sort By: Name a-z' },
        { value: 'nameza', label: 'Sort By: Name z-a' },
    ];

    const selectCustomStyles = {
        control: base => ({
            ...base,
            height: 45,
            minHeight: 45,
            border: 0,
            boxShadow: 'none',
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isFocused ? '#959595' : '#fff',
                color: isFocused ? '#FFF' : '#959595',
            };
        },
    };

    const [showMagnifyingImage, setShowMagnifyingImage] = useState(true);
    const [viewType, setViewType] = useState(true);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggleMagnifyingImage = () => {
        setShowMagnifyingImage(!showMagnifyingImage);
    }

    const toggleViewType = () => {
        setViewType(!viewType);
    }

    return (
        <div className="container grid-container">
            <div id="grid-controls-flex-wrapper">
                <div class="grid-controls-flex-item">
                    <span>All Items</span>
                </div>

                <div class="grid-controls-flex-item" id="grid-filters-flex-wrapper">
                    {showMagnifyingImage ? (
                        <div class="grid-filters-flex-item filter-inactive" onClick={toggleMagnifyingImage}>
                            <IconContext.Provider value={{ size: 24 }}>
                                <FaSearchPlus />
                            </IconContext.Provider>
                        </div>
                    ) : (
                        <div class="grid-filters-flex-item filter-inactive" onClick={toggleMagnifyingImage}>
                            <IconContext.Provider value={{ size: 24 }}>
                                <FaSearchMinus />
                            </IconContext.Provider>
                        </div>
                    )}

                    <div class={`grid-filters-flex-item ${viewType ? 'filter-active' : 'filter-inactive'}`} onClick={toggleViewType}>
                        <IconContext.Provider value={{ size: 24 }}>
                            <AiFillAppstore />
                        </IconContext.Provider>
                    </div>

                    <div class={`grid-filters-flex-item ${!viewType ? 'filter-active' : 'filter-inactive'}`} onClick={toggleViewType}>
                        <IconContext.Provider value={{ size: 24 }}>
                            <FaList />
                        </IconContext.Provider>
                    </div>

                    <div class="grid-filters-flex-item">
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            styles={selectCustomStyles}
                            isSearchable={false}
                        />
                    </div>
                </div>
            </div>
            <div class={`${viewType ? 'flex-wrapper-grid' : 'flex-wrapper-list'}`}>
                {[...Array(n)].map((e, i) => <ItemCard viewType={viewType} />)}
            </div>
        </div>
    );
}

export default VaultGridControls;