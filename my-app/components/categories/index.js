import React from "react";
import Link from 'next/link'
import Styles from './styles.module.css'


function Categories({ categories }) {
  return (
    <div className={Styles.categories}>
      {categories.map((category) => (
        <Link
          key={category.id}
          className={Styles.category}
          href={`/${category.id}`}
        >
          <div className={Styles.name}>{category.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default Categories;