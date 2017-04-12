"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var movies = [
            { id: 1, name: 'Pocahontas', director: 'Eric Goldberg', date: '1995', cover: 'http://1.fwcdn.pl/po/87/12/8712/7535077.2.jpg', rented: false, personName: '', personSurname: '', dateOfRent: '' },
            { id: 2, name: 'Top Gun', director: 'Tony Scott', date: '1986', cover: 'http://1.fwcdn.pl/po/10/10/1010/6979485.2.jpg', rented: true, personName: '', personSurname: '', dateOfRent: '' },
            { id: 3, name: 'Paerl Harbor', director: 'Michael Bay', date: '2001', cover: 'http://1.fwcdn.pl/po/85/86/8586/6998631.2.jpg', rented: true, personName: '', personSurname: '', dateOfRent: '' },
            { id: 4, name: 'Piekna i Bestia', director: 'Gary Trousdale', date: '1991', cover: 'http://1.fwcdn.pl/po/13/66/31366/7428542.2.jpg', rented: false, personName: '', personSurname: '', dateOfRent: '' },
            { id: 5, name: 'Madagaskar', director: 'Eric Darnell', date: '2005', cover: 'http://1.fwcdn.pl/po/75/35/107535/7027162.2.jpg', rented: false, personName: '', personSurname: '', dateOfRent: '' },
            { id: 6, name: 'Nietykalni', director: 'Eric Toledano', date: '2011', cover: 'http://1.fwcdn.pl/po/33/90/583390/7441162.2.jpg', rented: true, personName: '', personSurname: '', dateOfRent: '' },
            { id: 7, name: 'Szeregowiec Ryan', director: 'Steven Spielberg', date: '1998', cover: 'http://1.fwcdn.pl/po/01/79/179/7710998.2.jpg', rented: true, personName: '', personSurname: '', dateOfRent: '' },
            { id: 8, name: 'Forrest Gump', director: 'Robert Zemeckis', date: '1994', cover: 'http://1.fwcdn.pl/po/09/98/998/7314731.2.jpg', rented: false, personName: '', personSurname: '', dateOfRent: '' },
            { id: 9, name: 'Jak rozpetalem druga wojne swiatowa', director: 'Tadeusz Chmielewski', date: '1969', cover: 'http://1.fwcdn.pl/po/65/31/6531/7198349.2.jpg', rented: false, personName: '', personSurname: '', dateOfRent: '' },
            { id: 10, name: 'Dziennik Bridget Jones', director: 'Sharon Maguire', date: '2001', cover: 'http://1.fwcdn.pl/po/43/40/4340/7180003.2.jpg', rented: true, personName: '', personSurname: '', dateOfRent: '' },
            { id: 11, name: 'Listy do M.', director: 'Mitja Okorn', date: '2011', cover: 'http://1.fwcdn.pl/po/35/10/613510/7403102.2.jpg', rented: true, personName: '', personSurname: '', dateOfRent: '' },
            { id: 12, name: 'Amelia', director: 'Jean-Pierre Jeunet', date: '2001', cover: 'http://1.fwcdn.pl/po/14/16/31416/7515197.2.jpg', rented: true, personName: '', personSurname: '', dateOfRent: '' },
            { id: 13, name: 'Psychoza', director: 'Alfred Hitchcock', date: '1960', cover: 'http://1.fwcdn.pl/po/13/21/1321/7541343.2.jpg', rented: true, personName: '', personSurname: '', dateOfRent: '' },
            { id: 14, name: 'Dziecko Rosemary', director: 'Roman Polański', date: '1968', cover: 'http://1.fwcdn.pl/po/11/04/1104/6914703.2.jpg', rented: false, personName: '', personSurname: '', dateOfRent: '' },
            { id: 15, name: 'Bogowie', director: 'Łukasz Palkowski', date: '2014', cover: 'http://1.fwcdn.pl/po/43/78/694378/7632114.2.jpg', rented: false, personName: '', personSurname: '', dateOfRent: '' },
            { id: 16, name: 'Teoria wszystkiego', director: 'James Marsh', date: '2014', cover: 'http://1.fwcdn.pl/po/18/62/691862/7667694.2.jpg', rented: false, personName: '', personSurname: '', dateOfRent: '' },
            { id: 17, name: 'Pamietnik', director: 'Nick Cassavetes', date: '2004', cover: 'http://1.fwcdn.pl/po/88/87/38887/7386912.2.jpg', rented: false, personName: '', personSurname: '', dateOfRent: '' },
            { id: 18, name: 'Miasto Aniolow', director: 'Brad Silberling', date: '1998', cover: 'http://1.fwcdn.pl/po/01/16/116/7231891.2.jpg', rented: true, personName: '', personSurname: '', dateOfRent: '' }
        ];
        return { movies: movies };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=app.in-memory-data-service.js.map