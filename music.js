class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Son Arzum", "Nilüfer","1.jpeg","1.mp3"),    
    new Music("Bu da Geçer mi Sevgilim", "Yalın","2.jpeg","2.mp3"),    
    new Music("Aramızda Uçurumlar", "Suat Suna","3.jpeg","3.mp3"),
    new Music("Ağlaya Ağlaya","Tekir","4.jpg","4.mp3"),
    new Music("Ruhun Ölmüş Senin","Gaye Su Akyol","5.jpg","5.mp3"),
    new Music("Pusulam Rüzgar","Melike Şahin","6.jpg","6.mp3"),
    new Music("Unuttun mu Beni","Tuğkan","7.jpg","7.mp3"),
    new Music("Onlar Yanlış Biliyor","Üner Demir & Eda Baba","8.jpg","8.mp3")     
];
