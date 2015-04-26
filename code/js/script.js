$(document)
  .ready(function(){
    getCricketSchedule();
    getFootballSchedule();
    getTennisSchedule();
  });
//for homepage tab
$('.menu .item')
  .tab();

function getCricketSchedule(){
    var request = $.ajax({
        url: "sports.json",
        dataType: "json"
    });
    request.done(function(data) {
       
           $.each(data.cricket.schedule, function() {
         
            if (this.hour != null) {
        
                var matchYear = this.year
                var matchMonth = this.month
                var matchDate = this.date
                var matchHour = this.hour
                var matchMinutes = this.minute
                
                var CurrTimestamp = moment().unix();
                var jsonTimestamp = moment(+matchYear+"-"+matchMonth+"-"+matchDate+"T"+matchHour+":"+matchMinutes+":00", moment.ISO_8601).unix();
                var jsonEndTime = jsonTimestamp+10800;
                if (CurrTimestamp >= jsonTimestamp &&  CurrTimestamp <= jsonEndTime) {
          
                    $('#hotTab').append('<div class="item">'+
                                        '<div class="header">CRICKET: '+this.home+' v ' +this.away+ ' <i>(IN PLAY)</i></div>'+
                                        '<table class="ui unstackable table">'+
                                        '<thead>'+
                                        '<tr>'+
                                        '<th>Match Prediction</th>'+
                                        '<th>Next Batsmen Out</th>'+
                                        '<th>Next Dismissal</th>'+
                                        
                                        '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td>'+this.home+': <div class="ui tiny button">'+this.oddsHome+'</div>'+
                                        this.away+': <div class="ui tiny button">'+this.oddsAway+'</div></td>'+
                                        '<td>'+this.nextManOut.name1+': <div class="ui tiny button">'+this.nextManOut.odds1+'</div>'+
                                        this.nextManOut.name2+': <div class="ui tiny button">'+this.nextManOut.odds2+'</div></td>'+
                                        '<td>Bowled: <div class="ui tiny button">'+this.nextWicketMethod.bowled+'</div>'+
                                        'Any Other: <div class="ui tiny button">'+this.nextWicketMethod.catched+'</div></td>'+
                                        '</tr>'+
                                        '</tbody>'+
                                        '</div>')
                }
                
                if (CurrTimestamp < jsonTimestamp) {
                    var matchTime = moment(+matchYear+"-"+matchMonth+"-"+matchDate+" "+matchHour+":"+matchMinutes).calendar();
                    $('#hotTab').append('<div class="item">'+
                                        '<div class="header">CRICKET: '+this.home+' v ' +this.away+ ' <i>Date: '+matchTime+'</i></div>'+
                                        '<table class="ui unstackable table">'+
                                        '<thead>'+
                                        '<tr>'+
                                        '<th>Match Prediction</th>'+
                                        '<th>Next Batsmen Out</th>'+
                                        '<th>Next Dismissal</th>'+
                                        
                                        '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td>'+this.home+': <div class="ui tiny button">'+this.oddsHome+'</div>'+
                                        this.away+': <div class="ui tiny button">'+this.oddsAway+'</div></td>'+
                                        '<td>'+this.nextManOut.name1+': <div class="ui tiny button">'+this.nextManOut.odds1+'</div>'+
                                        this.nextManOut.name2+': <div class="ui tiny button">'+this.nextManOut.odds2+'</div></td>'+
                                        '<td>Bowled: <div class="ui tiny button">'+this.nextWicketMethod.bowled+'</div>'+
                                        'Any Other: <div class="ui tiny button">'+this.nextWicketMethod.catched+'</div></td>'+
                                        '</tr>'+
                                        '</tbody>'+
                                        '</div>')
                }
                
                
            }
           });
        
        
    });
}

function getFootballSchedule(){
    var request = $.ajax({
        url: "sports.json",
        dataType: "json"
    });
    request.done(function(data) {
       
           $.each(data.football.schedule, function() {
         
            if (this.hour != null) {
        
                var matchYear = this.year
                var matchMonth = this.month
                var matchDate = this.date
                var matchHour = this.hour
                var matchMinutes = this.minute
                var CurrTimestamp = moment().unix();
                var jsonTimestamp = moment(+matchYear+"-"+matchMonth+"-"+matchDate+"T"+matchHour+":"+matchMinutes+":00", moment.ISO_8601).unix();
                var jsonEndTime = jsonTimestamp + 5400;
                if (CurrTimestamp >= jsonTimestamp && CurrTimestamp <= jsonEndTime ) {
          
                    $('#hotTab').append('<div class="item">'+
                                        '<div class="header">FOOTBALL: '+this.home+' v '+this.away+' <i>(IN PLAY)</i></div>'+
                                        '<table class="ui unstackable table">'+
                                        '<thead>'+
                                        '<tr>'+
                                        '<th>Match Prediction</th>'+
                                        '<th>Goal in next 5 min</th>'+
                                        '<th>Penalty in next 5 min</th>'+
                                        '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td>'+this.home+': <div class="ui tiny button">'+this.oddsHome+'</div>'+
                                        this.away+': <div class="ui tiny button">'+this.oddsAway+'</div></td>'+
                                        '<td>Yes: <div class="ui tiny button">'+this.goalFivMin.yes+'</div>'+
                                        'No: <div class="ui tiny button">'+this.goalFivMin.no+'</div></td>'+
                                        '<td>Yes: <div class="ui tiny button">'+this.penaltyFivMin.yes+'</div>'+
                                        'Any Other: <div class="ui tiny button">'+this.penaltyFivMin.no+'</div></td>'+
                                        '</tr>'+
                                        '</tbody>'+
                                        '</div>')
                }
                if (CurrTimestamp < jsonTimestamp) {
                    var matchTime = moment(+matchYear+"-"+matchMonth+"-"+matchDate+" "+matchHour+":"+matchMinutes).calendar();
                    $('#hotTab').append('<div class="item">'+
                                        '<div class="header">FOOTBALL: '+this.home+' v '+this.away+' <i>Date: '+matchTime+'</i></div>'+
                                        '<table class="ui unstackable table">'+
                                        '<thead>'+
                                        '<tr>'+
                                        '<th>Match Prediction</th>'+
                                        '<th>Goal in next 5 min</th>'+
                                        '<th>Penalty in next 5 min</th>'+
                                        '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td>'+this.home+': <div class="ui tiny button">'+this.oddsHome+'</div>'+
                                        this.away+': <div class="ui tiny button">'+this.oddsAway+'</div></td>'+
                                        '<td>Yes: <div class="ui tiny button">'+this.goalFivMin.yes+'</div>'+
                                        'No: <div class="ui tiny button">'+this.goalFivMin.no+'</div></td>'+
                                        '<td>Yes: <div class="ui tiny button">'+this.penaltyFivMin.yes+'</div>'+
                                        'Any Other: <div class="ui tiny button">'+this.penaltyFivMin.no+'</div></td>'+
                                        '</tr>'+
                                        '</tbody>'+
                                        '</div>')
                }
                
            }
           });
        
        
    });
}

function getTennisSchedule(){
    var request = $.ajax({
        url: "sports.json",
        dataType: "json"
    });
    request.done(function(data) {
       
           $.each(data.tennis.schedule, function() {
         
            if (this.hour != null) {
        
                var matchYear = this.year
                var matchMonth = this.month
                var matchDate = this.date
                var matchHour = this.hour
                var matchMinutes = this.minute
                var CurrTimestamp = moment().unix();
                var jsonTimestamp = moment(+matchYear+"-"+matchMonth+"-"+matchDate+"T"+matchHour+":"+matchMinutes+":00", moment.ISO_8601).unix();
                 var jsonEndTime = jsonTimestamp + 10800;
                if (CurrTimestamp >= jsonTimestamp && CurrTimestamp <= jsonEndTime ) {
          
                    $('#hotTab').append('<div class="item">'+
                                        '<div class="header">TENNIS: '+this.home+' v '+this.away+' <i>(IN PLAY)</i></div>'+
                                        '<table class="ui unstackable table">'+
                                        '<thead>'+
                                        '<tr>'+
                                        '<th>Match Prediction</th>'+
                                        '<th>Next game to win</th>'+
                                        '<th>Deuce in next game</th>'+
                                        '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td>'+this.home+': <div class="ui tiny button">'+this.oddsHome+'</div>'+
                                        this.away+': <div class="ui tiny button">'+this.oddsAway+'</div></td>'+
                                        '<td>'+this.home+': <div class="ui tiny button">'+this.nextToWin.home+'</div>'+
                                        this.away+': <div class="ui tiny button">'+this.nextToWin.away+'</div></td>'+
                                        '<td>Yes: <div class="ui tiny button">'+this.deuceInNext.yes+'</div>'+
                                        'No: <div class="ui tiny button">'+this.deuceInNext.no+'</div></td>'+
                                        '</tr>'+
                                        '</tbody>'+
                                        '</div>')
                }
                
                if (CurrTimestamp < jsonTimestamp) {
                    var matchTime = moment(+matchYear+"-"+matchMonth+"-"+matchDate+" "+matchHour+":"+matchMinutes).calendar();
                    $('#hotTab').append('<div class="item">'+
                                        '<div class="header">TENNIS: '+this.home+' v '+this.away+' <i>Date: '+matchTime+'</i></div>'+
                                        '<table class="ui unstackable table">'+
                                        '<thead>'+
                                        '<tr>'+
                                        '<th>Match Prediction</th>'+
                                        '<th>Next game to win</th>'+
                                        '<th>Deuce in next game</th>'+
                                        '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td>'+this.home+': <div class="ui tiny button">'+this.oddsHome+'</div>'+
                                        this.away+': <div class="ui tiny button">'+this.oddsAway+'</div></td>'+
                                        '<td>'+this.home+': <div class="ui tiny button">'+this.nextToWin.home+'</div>'+
                                        this.away+': <div class="ui tiny button">'+this.nextToWin.away+'</div></td>'+
                                        '<td>Yes: <div class="ui tiny button">'+this.deuceInNext.yes+'</div>'+
                                        'No: <div class="ui tiny button">'+this.deuceInNext.no+'</div></td>'+
                                        '</tr>'+
                                        '</tbody>'+
                                        '</div>')
                }
                
            }
           });
        
        
    });
}