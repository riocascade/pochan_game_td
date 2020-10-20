let ysdk;
       
        function  myYanEcapAd() {
            YaGames
                .init()
                .then(ysdk_ => {
                    ysdk = ysdk_;
                    ysdk.adv.showFullscreenAdv({
                        callbacks: {
                            onClose: wasShown => {
                                console.info('First close');
								c2_callFunction("ResumeGamesEcaps");
                            }
                        }
                    });
                })
}