docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test_project/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t test_project/app ../..
