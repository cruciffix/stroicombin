export const VDK = ({styles, mediaStyles }) => {
    return (
        <section className={`${styles["sectionVDK"]} `}>
            <div className={`${styles["wrapperVDK"]} `}>
                <h2>Волжский домостроительный комбинат</h2>

                <div className={`${styles["contentWrapperVDK"]} `}>
                    {
                        // Цикл отвечает за две строки
                        [1, 2].map(item => {
                            return (
                                <div className={`${styles["contentRowVDK"]}`}>
                                    {

                                        // Этот цикл отвечает за контент в строках (сами фотки крч)
                                        [1, 2, 3].map(subItem => {
                                            
                                            return (
                                                subItem === 2 ?
                                                (
                                                <div className={`${styles["centerBlockVDK"]}`}>
                                                    <div className={`${styles["wrapperCenterBlock"]}`}>
                                                        <div>
                                                            <img src="/index/vdk/hand.png"/>
                                                        </div>
                                                        
                                                        <span>Все, что необходимо для комфортной жизни новоселов в шаговой доступности</span>
                                                     </div>
                                                </div>
                                                ) :
                                                (
                                                 <div className={`${styles["peripheryBlockVDK"]}`}>
                                                     <img src="/index/vdk/1.png"/>
                                                 </div>
                                                ) 
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}