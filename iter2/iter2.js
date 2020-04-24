const fs = require('fs');
const papa = require('papaparse');

const file = fs.createReadStream('partycsv.csv');

class Party{
    constructor(newPartyName, newVotes, newVotePercentage) {
        this.partyName = newPartyName;
        this.votes = newVotes;
        this.votePercentage = newVotePercentage;
    }
}

class Electorate{
    constructor(newElectorateName) {
        this.electorateName = newElectorateName;
        this.partyCount = 0;
        this.partyList = [ ];
    }

    addParty(newPartyName, newVotes, new_votes_percentage) {
        let aParty = new Party(newPartyName, newVotes, new_votes_percentage);
        this.partyCount += 1;
        this.partyList.push(aParty);
    }
}

anElectorate = new Electorate(newElectorateName="Kelston")

papa.parse(file, {
	complete: function(results) {
        var parties = 0
        parties = results.data;
        //add all parties to anElectorate
        parties.forEach(forEachAddToParty);
        //stringify the JSON so we can save it to a file, otherwise it will look like "[object object]"
        var anElectorateStr = JSON.stringify(anElectorate, null, 4);
       //console.log(anElectorateStr);

        fs.writeFile('electorate.json', anElectorateStr, (err) => {
            if (err) throw err;
            //console.log('file created!');
        });
        }
});

function forEachAddToParty(party) {
    anElectorate.addParty(newPartyName=party[0], newVotes=party[1], newVotePercentage=party[02]);
};

module.exports = {
    Party,
    Electorate
};
