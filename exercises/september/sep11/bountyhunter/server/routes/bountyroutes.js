const express = require('express')
const bobaServer = express()
const bountyRoutes = express.Router()
const uuid = require('uuid/v4')

const bounties = [
    {
        firstName: 'Poopyface',
        lastName: 'McGee',
        isLiving: true,
        bountyAmt: 5000000,
        type: 'Sith',
        id: '1234'
    },
    {
        firstName: 'Darth',
        lastName: 'Dearth',
        isLiving: false,
        bountyAmt: 320343,
        type: 'Sith',
        id: '5678'
    },
    {
        firstName: 'Mace',
        lastName: 'Windusonsenberts',
        isLiving: true,
        bountyAmt: 5,
        type: 'Jedi',
        id: '9123'
    },
    {
        firstName: 'Justin',
        lastName: 'Willmore',
        isLiving: true,
        bountyAmt: 1,
        type: 'Jedi',
        id: 'poop'
    }
]

// GET WHOLE ARRAY OR SPECIFIC QUERIED BOUNTY
bountyRoutes.get('/', (req, res) => {
    const queriedBounties = bounties.filter(person => {
        if(person.bountyAmt < req.query.maxamount){
            return person
        } else if (Object.keys(req.query).length === 0){
            res.send(bounties)
        }
    })
    res.send(queriedBounties)
})

// GET SPECIFIC BOUNTY 
bountyRoutes.get('/:id', (req, res) => {
    const singleBounty = bounties.find(person => person.id === req.params.id)
    res.send(singleBounty)
})

// POST
bobaServer.post('/', (req, res) => {
    bounties.push({...req.body, id: uuid()})
    res.send(bounties)
})

// PUT
bobaServer.put('/:id', (req, res) => {
    const changeBounty = bounties.findIndex(person => person.id === req.params.id)
    bounties.splice(changeBounty, 1, req.body)
    res.send(bounties)
})

// DELETE
bobaServer.delete('/:id', (req, res) => {
    const deleteBounty = bounties.findIndex(person => person.id === req.params.id)
    bounties.splice(deleteBounty, 1)
    res.send(bounties)
})

module.exports = bountyRoutes