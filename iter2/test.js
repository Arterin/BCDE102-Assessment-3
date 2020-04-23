var expect = require('chai').expect;
const { Party, Electorate } = require('./iter2');

describe('Iteration 2 unit tests with Mocha and Chai', function() {
    describe('#Party', function() {

        beforeEach(function() {
            testParty = new Party("Green Party", 500, 6);
        });

        it('partyName exists and is callable', function() {
            expect(testParty.partyName).to.equal("Green Party");
        });

        it('votes exists and is callable', function() {
            expect(testParty.votes).to.equal(500);
        });

        it('votesPercentage exists and is callable', function() {
            expect(testParty.votePercentage).to.equal(6);
        });
    });

    describe('#Electorate', function() {

        beforeEach(function() {
            testElectorate = new Electorate("Christchurch East");
        });

        it('electorateName exists and is callable', function() {
            expect(testElectorate.electorateName).to.equal("Christchurch East");
        });

        it('partyCount exists and is callable', function() {
            expect(testElectorate.partyCount).to.equal(0);
        });

        it('partyList exists and is callable', function() {
            expect(testElectorate.partyList).to.exist;
        });

    describe('#addParty()', function() {

        beforeEach(function() {
            testElectorate = new Electorate("Kelston")
            testElectorate.addParty("Labour", 600, 40)
        });

        it('addParty adds the partyName to the electorate object\'s partyList', function() {
            expect(testElectorate.partyList[0]['partyName']).to.equal("Labour");
        });

        it('addParty adds the votes to the electorate object\'s partyList', function() {
            expect(testElectorate.partyList[0]['votes']).to.equal(600);
        });

        it('addParty adds the votePercentage to the electorate object\'s partyList', function() {
            expect(testElectorate.partyList[0]['votePercentage']).to.equal(40);
        });

        it('after we use addParty, the Electorate object\'s partyCount increments by 1', function() {
            expect(testElectorate.partyCount).to.equal(1);
        });
    });
    });
});