(() => {

const holidays = [
    ['1/1/2019', 'Tuesday', `New Year's Day`],
    ['1/7/2019', 'Monday', `Orthodox Christmas Day`],
    ['3/8/2019', 'Friday', `International Women's Day`],
    ['4/29/2019', 'Monday', `Easter Day`],
    ['5/1/2019', 'Wednesday', `Labor Day Holiday`],
    ['5/9/2019', 'Thursday', `Victory Day / Memorial Day`],
    ['6/17/2019', 'Monday', `Pentecost`],
    ['6/28/2019', 'Friday', `Constitution Day`],
    ['8/26/2019', 'Monday', `Independence Day`],
    ['10/14/2019', 'Monday', `Defenders' Day`],
    ['12/25/2019', 'Wednesday', `Catholic Christmas Day`]
];
    const searchByDate = function (a, d) {
        return a.forEach((h, i, k) => {
            if (d === h[0])
            r = h[2];
        });
        return r;
    };
alert(searchByDate(holidays, '6/17/2019'));
})();