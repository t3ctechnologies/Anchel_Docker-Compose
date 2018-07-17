# Anchel-Docker

> Docker is available [here](https://www.docker.com/products/docker) and docker-compose [here](https://docs.docker.com/compose).
> Make sure that these are installed on your system before starting.

* Docker can be installed with the following lines on most distros :

```bash
$ curl -sSL https://get.docker.com | sudo curl
```

* docker-compose can be installed as :

```bash
# As a binary
$ cd path/to/anchel-docker
$ curl -sL https://github.com/docker/compose/releases/download/1.7.0/docker-compose-`uname -s`-`uname -m` > ./docker-compose
$ sudo chmod +x ./docker-compose

# As a python package
$ pip install -r requirements.txt
```

### Presentation

    Deploy a Anchel instance with ease using Docker and docker-compose

This docker-compose aims to make possible to quickly run a Anchel appliance.
It consists of several containers :

* Tomcat with Anchel server
* Postgresql for the server
* Apache2 with Anchel Admin's interface
* Apache2 with Anchel UploadRequest's interface
* Apache2 with Anchel User's interface
* Apache2 acting as a reverse-proxy for the above (except Postgresql)
* Opensmtp server configured in relay mode
* ClamAV server to be used by Tomcat

Most of the containers can be configured to suits your needs, the available settings are either already used (and you have just to replace them) or commented out.
Automatic upgrades for data used by containers is not available.

### How to use it

```bash
# use this line to launch it
$ docker-compose up -d

# use this line to see logs for all containers
$ docker-compose logs

# use this line to stop
$ docker-compose stop

# use this line to delete previously created containers
$ docker-compose down

# use this line to delete all data created by containers (reset all modifications)
$ sudo rm -fr data
```

By default the containers are listenning to **anchel.local** so you may have to add the following lines in your hosts file :

```bash
127.0.0.1   user.anchel.local admin.anchel.local anchel.local
```

And all uses the ```https``` protocol via the port 443.

### Quick start

Once everything is running, you can start using Anchel [home page](https://anchel.io) and configuring it:

1. Browse to [admin.anchel.io](https://admin.anchel.io) and log in using
    - mail : **root@localhost.localdomain**
    - password : **adminlinshare**
2. Select **Domain** &rarr; **LDAP connections**
    - Click on the '**+**' icon
    - Fill the fields with your LDAP credentials
    - Hit **Save**
3. Select **Domain** &rarr; **Domain patterns**
    - In **Model selector** chose **default-pattern-openldap**
    - Fill the field **Name**
    - Hit **Save**
4. Select **Domain** &rarr; **Manage domains**
    - Click on the '**+**' button after **LinShareRootDomain**
    - Fill the fields **Identifier**, **Name** and **Description**
    - Leave **Inter-domains communication rules** to ```DefaultDomainPolicy```
    - Select the wanted settings for the remaining fields
    - Click on **Add provider**
    - Select the previous created elements in **step 2** and **step 3** for each fields and provide your **Base dn** in the last one
    - Hit **Save**
5. You can now go [user.anchel.local](https://user.anchel.io/) and start using your LDAP users.

### License

View [license information](https://t3c.io/license.pdf) for the software contained in this image.

### Supported Docker versions

This image is officially supported on Docker version 1.9.0 and above.

Please see [the Docker installation documentation](https://docs.docker.com/installation/) for details on how to upgrade your Docker daemon.


### User Feedback

#### Documentation

Official Anchel documentation is available here : [Anchel Configuration Guide (pdf format)](https://anchel.io/userGuide.pdf).


#### Issues

If you have any problems with or questions about this image, please contact us through a [GitHub issue](https://github.com/t3ctechnologies/Anchel_Docker-Compose/issues).
