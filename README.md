# k8s-demo
## Minikube
1. [Install Minikube](https://minikube.sigs.k8s.io/docs/start/)
   1. Depending on your OS, you may need to [install Docker](https://docs.docker.com/get-docker/)
2. `minikube start`
3. `minikube tunnel`
4. `alias k="minikube kubectl"`

## Helm for Postgres

1. [Install Helm](https://helm.sh/docs/intro/install/)
2. `helm repo add bitnami https://charts.bitnami.com/bitnami`
3. `helm repo update`
4. `helm install my-release bitnami/postgresql`
5. `k get services`

## Run Deployment

1. `kubectl apply -f manifests/backend.yaml`
2. Update the svc url in manifests/frontend.yaml
3. `kubectl apply -f manifests/frontend.yaml`

