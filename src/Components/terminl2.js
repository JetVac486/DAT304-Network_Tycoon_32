   component: <Terminal
          style={globalStyles}
          commands={{
            increment: {
              description: 'Increments a number by one.',
              fn: () => {
                this.setState({ locked: true }) // This is just here so the welcome message or anything run before 'increment' doesn't go away
                const newIncrement = this.state.increment + 1
                this.setState({ increment: newIncrement })
                return newIncrement
              }
            }
          }}
          welcomeMessage='This terminal updates the output of the "increment" command when run multiple times in succession.'
          locked={this.state.locked}
        />

        component: <Terminal
        style={globalStyles}
        commands={casingCommands}
        welcomeMessage={[
          'This terminal requires commands to be input in correct casing.',
          'Try running "help" and then running both "CaSeMatTeRs" and "casematters"!'
        ]}
      />
    },


    return (
      <main>
        <Header/>
        {this.generateTerminalDemos(terminals)}
        <Footer/>
      </main>
    )
  }
}