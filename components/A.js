import Link from "next/link"
import styles from '../styles/A.module.css' // Имя файла задаётся по определённому шаблону: имя_компоненты.module.css, в дальнейшем к классу обращаемся styles.link из файла link.css

// Link удаляет стандартное поведение браузера, в итоге перезагрузка страницы при переходе по ссылке исчезает
export default function A({text, href})
{
    return (
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}