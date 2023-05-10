import styles from './styles.module.css'


interface Props {
  onClick: () => void
}

const Submit: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.button} onClick={onClick}>
        <p>Aplicar</p>
    </div>
  )
}

export default Submit
