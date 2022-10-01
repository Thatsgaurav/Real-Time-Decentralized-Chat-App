import styles from '../styles/sidebar.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Sidebar = () => {
    const router = useRouter()
    const [channels, setChannels] = useState([])

    return <div className={styles.wrapper}>Sidebar</div>
}

export default Sidebar