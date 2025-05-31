import styles from "./Perfil.module.scss"
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton"

const Perfil = ({ nome, foto, cargo, localizacao, bio, carregando = false, erro = false, onSeguir, onMensagem }) => {
  if (carregando) return <LoadingSkeleton />
  if (erro) return <div className={styles.erro}>Erro ao carregar perfil.</div>

  return (
    <main className={styles.card}>
      <div className={styles.avatarWrapper}>
        {foto ?(
          <img src={foto} alt={nome} className={styles.avatar} />
        ): (
          <div className={styles.avatarFallback}>{nome?.charAt(0)}</div>
        )}
      </div>
      
      <h2 className={styles.nome}>{nome}</h2>
      <p className={styles.cargo}>{cargo} | {localizacao}</p>
      {bio && <p className={styles.bio}>{bio}</p>}
      <div className={styles.acoes}>
        <button className={styles.btnPrimario} onClick={onSeguir}>Seguir</button>
        <button className={styles.btnSecundario} onClick={onMensagem}>Mensagem</button>
      </div>
    </main>
  )
}

export default Perfil