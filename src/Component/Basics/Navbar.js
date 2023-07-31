import React from "react";

const Navbar = ({ filterItems, MenuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {MenuList.map((curElem) => {
            return (
              <>
                <button
                  className="btn-group__item"
                  onClick={() => filterItems(curElem)}
                >
                  {curElem}
                </button>
              </>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
